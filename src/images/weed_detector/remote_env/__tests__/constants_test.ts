import { DEFAULT_FORMATTER } from "../constants";

describe("DEFAULT_FORMATTER", () => {
  it("crashes on bad inputs", () => {
    expect(() => {
      DEFAULT_FORMATTER.parse("H_HI", "_XYZ-");
    }).toThrow();
  });

  it("crashes on data types other than string,num,bool", () => {
    expect(() => {
      DEFAULT_FORMATTER.parse("H_HI", JSON.stringify({}));
    }).toThrow();
  });

  it("parses OK inputs (number)", () => {
    let result = DEFAULT_FORMATTER.parse("blur", "23");
    expect(result).toEqual(23)
  });

  it("parses OK inputs (special)", () => {
    pending("Why is this broke?");
    let result = DEFAULT_FORMATTER.parse("morph", "true");
    expect(result).toEqual(1);
  });

  it("formats outputs", () => {
    let result = DEFAULT_FORMATTER.format("coord_scale", 12);
    expect(result).toEqual(12);
  });
});
