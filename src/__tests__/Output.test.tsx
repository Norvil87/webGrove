import React from "react";
import { render, screen, getByTestId, fireEvent, waitForElement, queryByAttribute, getByTitle  } from "@testing-library/react";
import Output from '../components/Output/Output'
import App, {store} from '../components/App'
import { Provider } from 'react-redux'


describe("<Output />", () => {
  test("h2 to have Hello HTML text", () => {
    window.URL.createObjectURL = jest.fn();
    /* afterEach(() => {
      window.URL.createObjectURL.mockReset();
    }); */
    const output = render(<Provider store={store}><Output/></Provider>)

  });
});