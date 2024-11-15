import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import App from "../App";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  // your test code here
  render(<App />);

  expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();

  expect(screen.getByPlaceholderText(/email address/i)).toBeInTheDocument();
});

test("the form includes three checkboxes to select areas of interest", () => {
  render(<App />);

  const biking = screen.getByRole('checkbox', {name: /biking/i});
  const hiking = screen.getByRole('checkbox', {name: /hiking/i});
  const running = screen.getByRole('checkbox', {name: /running/i});

  expect(biking).toBeInTheDocument()
  expect(hiking).toBeInTheDocument()
  expect(running).toBeInTheDocument()

  
});

test("the checkboxes are initially unchecked", () => {
  render(<App />);

  const biking = screen.getByRole('checkbox', {name: /biking/i});
  const hiking = screen.getByRole('checkbox', {name: /hiking/i});
  const running = screen.getByRole('checkbox', {name: /running/i});

  expect(biking).not.toBeChecked()
  expect(hiking).not.toBeChecked()
  expect(running).not.toBeChecked()
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  render (<App />);

  const nameContact = screen.getByLabelText(/enter name/i);
  const emailContact = screen.getByLabelText(/enter email address/i);

  userEvent.type(nameContact, 'Steve Rogers');
  userEvent.type(emailContact, 'steverogers@email.com');


  expect(nameContact).toHaveValue('Steve Rogers');
  expect(emailContact).toHaveValue('steverogers@email.com');
});

test("checked status of checkboxes changes when user clicks them", () => {
  render(<App />);

  const biking = screen.getByRole('checkbox', {name: /biking/i});
  const hiking = screen.getByRole('checkbox', {name: /hiking/i});
  const running = screen.getByRole('checkbox', {name: /running/i});

  userEvent.click(biking)
  userEvent.click(hiking)
  userEvent.click(running)

  expect(biking).toBeChecked()
  expect(hiking).toBeChecked()
  expect(running).toBeChecked()

  userEvent.click(biking)
  userEvent.click(hiking)
  userEvent.click(running)

  expect(biking).not.toBeChecked()
  expect(hiking).not.toBeChecked()
  expect(running).not.toBeChecked()
});

test("a message is displayed when the user clicks the Submit button", () => {
  render(<App />)

  userEvent.click(screen.getByRole('button', {name: /submit info/i}));

  expect(screen.getByText(/your info has been submitted!/i)).toBeInTheDocument();
});
