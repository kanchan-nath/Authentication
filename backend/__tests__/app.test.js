import { describe, it, expect } from "vitest";
import { app } from "../app.js";

describe("app.js", () => {
  describe("Express app creation", () => {
    it("exports app as a named export", async () => {
      const module = await import("../app.js");
      expect(module.app).toBeDefined();
    });

    it("app is a function (Express application)", () => {
      expect(typeof app).toBe("function");
    });

    it("app has Express GET routing method", () => {
      expect(typeof app.get).toBe("function");
    });

    it("app has Express POST routing method", () => {
      expect(typeof app.post).toBe("function");
    });

    it("app has Express PUT routing method", () => {
      expect(typeof app.put).toBe("function");
    });

    it("app has Express DELETE routing method", () => {
      expect(typeof app.delete).toBe("function");
    });

    it("app has Express PATCH routing method", () => {
      expect(typeof app.patch).toBe("function");
    });

    it("app has Express middleware method (use)", () => {
      expect(typeof app.use).toBe("function");
    });

    it("app has listen method", () => {
      expect(typeof app.listen).toBe("function");
    });

    it("app has settings configurator (set method)", () => {
      expect(typeof app.set).toBe("function");
    });

    it("app has route registration method", () => {
      expect(typeof app.route).toBe("function");
    });
  });

  describe("app export consistency", () => {
    it("multiple imports return the same app instance (ESM singleton)", async () => {
      const module1 = await import("../app.js");
      const module2 = await import("../app.js");
      expect(module1.app).toBe(module2.app);
    });

    it("app export is not null or undefined", () => {
      expect(app).not.toBeNull();
      expect(app).not.toBeUndefined();
    });
  });

  describe("Express app properties", () => {
    it("app has a router attached", () => {
      expect(app.router).toBeDefined();
    });

    it("app has default settings initialized", () => {
      // Express sets 'x-powered-by' by default
      expect(app.get("x-powered-by")).toBe(true);
    });

    it("app can accept middleware registration without throwing", () => {
      expect(() => {
        app.use((req, res, next) => next());
      }).not.toThrow();
    });

    it("app can register a GET route without throwing", () => {
      expect(() => {
        app.get("/test-route", (req, res) => res.send("ok"));
      }).not.toThrow();
    });
  });
});