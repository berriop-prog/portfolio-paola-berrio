import React from 'react';
import './TextContainer.css';

const TextContainer = () => {
  return (
    <main>
      <header>Un poco de mi</header>
      <p className="container-text">
        Suspendisse potenti. Quisque libero quam, malesuada et mauris vitae,
        sagittis condimentum ante. Etiam volutpat nisl in nunc auctor tincidunt.
        Aliquam pharetra in diam nec elementum. Curabitur porta dignissim metus
        eu sodales. Maecenas nec dignissim tellus, vitae interdum purus.
        Praesent faucibus nisl a pellentesque pretium. Praesent vitae purus in
        arcu suscipit facilisis nec id orci. Proin varius dui dolor, ornare
        cursus leo commodo sed.
      </p>

      <header>Pasiones</header>
      <p className="container-text">
        Suspendisse potenti. Quisque libero quam, malesuada et mauris vitae,
        sagittis condimentum ante. Etiam volutpat nisl in nunc auctor tincidunt.
        Aliquam pharetra in diam nec elementum. Curabitur porta dignissim metus
        eu sodales. Maecenas nec dignissim tellus, vitae interdum purus.
      </p>

      <header>Conocimientos</header>
      <p className="container-text">
        Suspendisse potenti. Nunc auctor tincidunt. Aliquam pharetra eu sodales.
        Maecenas nec dignissim tellus.
      </p>
    </main>
  );
};

export default TextContainer;
