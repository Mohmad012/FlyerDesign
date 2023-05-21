import React from 'react';
import "@testing-library/jest-dom";
import Home from "../../src/pages/index";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Calculator", () => {
	it("renders a home page", () => {
		render(<Home />);
		expect(screen.getByTestId("title")).toBeInTheDocument();
		expect(screen.getByTestId("description")).toBeInTheDocument();
	});

	it("elements are have local keys for translation", () => {
		render(<Home />);
		// check if adds properly
		expect(screen.getByTestId("title")).toHaveTextContent("home_title_key");
		expect(screen.getByTestId("description")).toHaveTextContent("home_description_key");
	});
});
