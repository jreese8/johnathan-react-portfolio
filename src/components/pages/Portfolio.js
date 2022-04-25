import React from 'react';
import cctImage from '../../assets/images/cct.png';
import soeImage from '../../assets/images/soe.png';
function Portfolio() {
  return (
    <section className="my-5">
      <img src={cctImage} className="my-2" style={{ width: "50%" }} alt="Cocky Cocktails" />
      <img src={soeImage} className="my-2" style={{ width: "50%" }} alt="Stack Overeats" />
      <div className="my-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
          condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
          mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
          Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
          justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
          dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
          Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
        </p>
      </div>
    </section>
  );
}

export default Portfolio;
