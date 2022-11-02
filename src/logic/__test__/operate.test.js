import operate from "../operate";

describe("Testing operate function", () => {
  it("testing add operation", () => {
   
    let result = operate("45", "15", "+");
    expect(result).toBe("60");
  });

  it("testing divide operation", () => {
   
    let result = operate("45", "15", "÷");
    expect(result).toBe("3");
  });

  it("testing multiply operation", () => {
    let result = operate("45", "2", "x");
    expect(result).toBe("90");
  });

  it("testing substract operation", () => {
   
    let result = operate("45", "15", "-");
    expect(result).toBe("30");
  });

});

