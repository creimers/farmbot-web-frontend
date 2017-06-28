import * as React from "react";
import { WeedDetectorBody } from "../body";

describe("<Body/>", () => {
  function FakeElement(): React.ReactElement<WeedDetectorBody> {
    return <WeedDetectorBody
      onFlip={jest.fn()}
      onProcessPhoto={jest.fn()}
      onChange={jest.fn()}
      currentImage={undefined}
      images={[]}
      iteration={9}
      morph={9}
      blur={9}
      H_LO={2}
      S_LO={4}
      V_LO={6}
      H_HI={8}
      S_HI={10}
      V_HI={12} />;
  };

  it("triggers onChange() event", () => {
    let el = FakeElement();

  });
});
