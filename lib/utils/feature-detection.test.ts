import {
  supportsSendBeacon,
  supportsXMLHttpRequest
} from "./feature-detection";

describe("supportsSendBeacon", () => {
  it("should return false if non available", () => {
    // by default in jsdom env, navigator.sendBeacon is undefined
    expect(supportsSendBeacon()).toBe(false);
  });
  it("should return true if available", () => {
    navigator.sendBeacon = jest.fn();
    expect(supportsSendBeacon()).toBe(true);
    delete navigator.sendBeacon;
  });
});

describe("supportsXMLHttpRequest", () => {
  it("should return false if non available", () => {
    const XMLHttpRequest = (window as any).XMLHttpRequest;
    delete (window as any).XMLHttpRequest;
    expect(supportsXMLHttpRequest()).toBe(false);
    (window as any).XMLHttpRequest = XMLHttpRequest;
  });
  it("should return true if available", () => {
    // by default in jsdom env, XMLHttpRequest is available
    expect(supportsXMLHttpRequest()).toBe(true);
  });
});