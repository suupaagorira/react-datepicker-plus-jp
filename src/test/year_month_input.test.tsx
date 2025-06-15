import { render, fireEvent } from "@testing-library/react";
import React from "react";
import DatePicker from "../index";
import { safeQuerySelector, setupMockResizeObserver } from "./test_utils";

describe("year month input", () => {
  beforeEach(() => {
    setupMockResizeObserver();
  });

  it("should allow typing year and month", () => {
    const spy = jest.fn();
    const { container } = render(
      <DatePicker
        enableYearMonthInput
        onYearMonthChange={spy}
        open
        locale="ja"
      />,
    );
    const yearInput = safeQuerySelector<HTMLInputElement>(
      container,
      '.react-datepicker__year-month-input input[aria-label="年"]',
    );
    fireEvent.change(yearInput, { target: { value: "2025" } });
    fireEvent.keyDown(yearInput, { key: "Enter" });
    expect(spy).toHaveBeenCalledWith(expect.any(Date), "input");
  });
});
