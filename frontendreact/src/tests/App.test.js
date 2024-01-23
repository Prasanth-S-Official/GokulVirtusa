import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Register from "../components/authComponents/Register";



describe("Register Component", () => {
  it("renders the Register component", () => {
    render(<Register />);
    expect(screen.getByText("Create Account")).toBeInTheDocument();
  });

  it("validates the form and displays error messages", async () => {
    render(<Register />);
    
    // Simulate form submission without filling required fields
    fireEvent.click(screen.getByText("Register"));
    
    // Wait for validation messages to appear
    await waitFor(() => {
      expect(screen.getByText("Full Name is required")).toBeInTheDocument();
      expect(screen.getByText("Email is required")).toBeInTheDocument();
      expect(screen.getByText("Phone No is required")).toBeInTheDocument();
      expect(screen.getByText("Password is required")).toBeInTheDocument();
    });

    // Add more assertions based on your validation logic
  });

  // Add more test cases for form submission, API calls, etc.
});
