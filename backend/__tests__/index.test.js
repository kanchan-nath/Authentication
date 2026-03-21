import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

describe("index.js", () => {
  let mockListen;
  let mockDotenvConfig;

  beforeEach(() => {
    mockListen = vi.fn((port, cb) => {
      if (cb) cb();
    });
    mockDotenvConfig = vi.fn();

    vi.doMock("dotenv", () => ({
      default: { config: mockDotenvConfig },
    }));

    vi.doMock("../app.js", () => ({
      app: { listen: mockListen },
    }));
  });

  afterEach(() => {
    vi.resetModules();
    vi.restoreAllMocks();
  });

  it("calls dotenv.config with path ./.env", async () => {
    await import("../index.js");
    expect(mockDotenvConfig).toHaveBeenCalledWith({ path: "./.env" });
  });

  it("calls app.listen with process.env.PORT", async () => {
    process.env.PORT = "3000";
    await import("../index.js");
    expect(mockListen).toHaveBeenCalledWith("3000", expect.any(Function));
    delete process.env.PORT;
  });

  it("calls app.listen with undefined PORT when env var not set", async () => {
    delete process.env.PORT;
    await import("../index.js");
    expect(mockListen).toHaveBeenCalledWith(undefined, expect.any(Function));
  });

  it("logs 'Hello World!' to console when server starts", async () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    await import("../index.js");
    expect(consoleSpy).toHaveBeenCalledWith("Hello World!");
  });

  it("dotenv.config is called before app.listen", async () => {
    const callOrder = [];
    mockDotenvConfig.mockImplementation(() => callOrder.push("dotenv"));
    mockListen.mockImplementation(() => callOrder.push("listen"));

    await import("../index.js");

    expect(callOrder[0]).toBe("dotenv");
    expect(callOrder[1]).toBe("listen");
  });

  it("app.listen is called exactly once on startup", async () => {
    await import("../index.js");
    expect(mockListen).toHaveBeenCalledTimes(1);
  });
});