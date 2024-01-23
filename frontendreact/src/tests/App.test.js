
import { render, screen, fireEvent } from "@testing-library/react";
import ForgotPassword from "../components/auth/forgotPassword/ForgotPassword";


describe("Week4_Day5_For Forgot Password component", () => {
  it("week4_day5_testcase_to_check_the_rendering_of_forgotpassword_component", () => {
    render(<ForgotPassword />);
    expect(screen.getByText("Forgot Password")).toBeInTheDocument();
  });
  it("week4_day5_testcase_for_initializing_state_for_storing_form_data_and_if_data_matching_with_regex", async () => {
    render(<ForgotPassword />);
    // here we test input states with valid data
    const formData = {
      email: "test@example.com",
      newPassword: "Password1!",
      confirmPassword: "Password1!",
    };

    const emailInput = screen.getByTestId("emailInput");
    fireEvent.change(emailInput, { target: { value: formData.email } });

    const newPassword = screen.getByTestId("newPasswordInput");
    fireEvent.change(newPassword, { target: { value: formData.newPassword } });
    const confirmPasword = screen.getByTestId("confirmNewPasswordInput");
    fireEvent.change(confirmPasword, {
      target: { value: formData.confirmPassword },
    });

    // Define your regex pattern
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Check if the input value matches the regex pattern
    expect(emailRegex.test(emailInput.value)).toBe(true);
    expect(passwordRegex.test(newPassword.value)).toBe(true);
    expect(newPassword.value).toBe(confirmPasword.value);
  });

  it("week4_day5_testcase_for_error_states_if_the_value_is_empty", () => {
    const utils = render(<ForgotPassword />);
    // here we test input states with empty data and error states
    const errors = {
      email: "Email is required",
      newPassword: "New Password is required",
      confirmPassword: "Confirm Password is required",
    };
    const formData = {
      email: "",
      newPassword: "",
      confirmPassword: "",
    };
    const emailInput = screen.getByTestId("emailInput");
    fireEvent.change(emailInput, { target: { value: formData.email } });

    const newPasswordInput = screen.getByTestId("newPasswordInput");
    fireEvent.change(newPasswordInput, {
      target: { value: formData.newPassword },
    });
    const confirmPasswordInput = screen.getByTestId("confirmNewPasswordInput");
    fireEvent.change(confirmPasswordInput, {
      target: { value: formData.confirmPassword },
    });

    const submitButton = utils.container.querySelector(".resetbtnforgot");

    fireEvent.click(submitButton);

    expect(screen.getByText(errors.email)).toBeInTheDocument();
    expect(screen.getByText(errors.newPassword)).toBeInTheDocument();
    expect(screen.getByText(errors.confirmPassword)).toBeInTheDocument();
  });

  it("week4_day5_testcase_for_error_states_if_the_value_is_invalid", () => {
    const utils = render(<ForgotPassword />);
    const formData = {
      email: "testexample.com",
      newPassword: "Password1",
      confirmPassword: "Password1!@",
    };
    const errors = {
      email: "Invalid email address",
      newPassword:
        "Password must be 8 characters or more and include at least one uppercase, one lowercase, one special character, and one number",
      confirmPassword: "Passwords do not match",
    };
    // here we test input states with All invalid data or inalid inputs
    const emailInput = screen.getByTestId("emailInput");
    fireEvent.change(emailInput, { target: { value: formData.email } });

    const newPasswordInput = screen.getByTestId("newPasswordInput");
    fireEvent.change(newPasswordInput, {
      target: { value: formData.newPassword },
    });

    const confirmPasswordInput = screen.getByTestId("confirmNewPasswordInput");
    fireEvent.change(confirmPasswordInput, {
      target: { value: formData.confirmPassword },
    });

    const submitButton = utils.container.querySelector(".resetbtnforgot");
    fireEvent.click(submitButton);

    expect(screen.getByText(errors.email)).toBeInTheDocument();
    expect(screen.getByText(errors.newPassword)).toBeInTheDocument();
    expect(screen.getByText(errors.confirmPassword)).toBeInTheDocument();
  });
});
