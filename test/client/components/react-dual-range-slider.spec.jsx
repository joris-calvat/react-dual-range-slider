/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import ReactDualRangeSlider from "src/components/react-dual-range-slider";

describe("components/react-dual-range-slider", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<ReactDualRangeSlider />);
      expect(component).to.not.be.null;
    });

  });

});
