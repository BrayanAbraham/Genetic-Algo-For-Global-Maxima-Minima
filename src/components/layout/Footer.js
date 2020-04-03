import React from "react";

export const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container text-center">
        Made with <i className="fas fa-heart text-danger"></i> and{" "}
        <i className="fas fa-coffee"></i> by{" "}
        <a href="https://github.com/BrayanAbraham" className="text-primary">
          Brayan Abraham
        </a>
        . Github:{" "}
        <a
          href="https://github.com/BrayanAbraham/Genetic-Algo-For-Global-Maxima-Minima"
          className="text-primary"
        >
          Click Here
        </a>
      </div>
    </footer>
  );
};
