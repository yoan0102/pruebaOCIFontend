import React from 'react';
export interface BarraBottomInterface {}

const BarraBottom: React.FC<BarraBottomInterface> = () => {
  return (
    <section
      data-bs-version="5.1"
      className="footer3 cid-sFCygHrmNf mbr-reveal"
      // once="footers"
      id="footer3-24"
    >
      <div className="container">
        <div className="row align-center mbr-white">
          <div className="row row-copirayt">
            <p className="mbr-text mb-0 mbr-fonts-style mbr-white align-center display-7">
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BarraBottom;
