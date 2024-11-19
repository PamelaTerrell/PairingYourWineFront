import React from 'react';
import './WineHistory.css'; // Optional: For styling

const WineHistory = () => {
  return (
    <div className="wine-history">
      <h1>The History of Vino</h1>

      <section className="intro">
        <h2>What is Wine?</h2>
        <p>
          Wine is an alcoholic beverage made from fermented grapes or other fruits. The process of winemaking, known as viticulture, dates back thousands of years and has played a central role in many cultures throughout history.
        </p>
      </section>

      <section className="origins">
        <h2>The Origins of Wine</h2>
        <p>
          Wine is believed to have been first produced in the region around the South Caucasus (modern-day Georgia, Armenia, and Iran) over 6,000 years ago. Archaeological evidence shows that early winemakers used wild grapes to make fermented beverages, and the practice spread throughout the ancient world.
        </p>
      </section>

      <section className="timeline">
        <h2>Timeline of Wine History</h2>
        <ul>
          <li><strong>6,000 BC:</strong> The earliest evidence of wine production in the South Caucasus region.</li>
          <li><strong>3,000 BC:</strong> The Egyptians start cultivating vineyards along the Nile.</li>
          <li><strong>500 BC:</strong> The Greeks refine winemaking techniques, and wine becomes an integral part of their culture.</li>
          <li><strong>Middle Ages:</strong> Wine is spread throughout Europe by the Romans and religious orders like the monasteries.</li>
          <li><strong>Modern Day:</strong> Wine production has expanded globally, with the emergence of new wine regions in the Americas, Australia, and beyond.</li>
        </ul>
      </section>

      <section className="regions">
        <h2>Famous Wine Regions</h2>
        <p>
          Over the centuries, certain regions have become world-renowned for their wine production. Some of the most famous include:
        </p>
        <ul>
          <li><strong>Bordeaux, France:</strong> Known for its red wines, especially Cabernet Sauvignon and Merlot.</li>
          <li><strong>Napa Valley, USA:</strong> A top wine region in California, famous for its bold red wines.</li>
          <li><strong>Tuscany, Italy:</strong> Home of Chianti and other Sangiovese-based wines.</li>
          <li><strong>Rioja, Spain:</strong> Known for its Tempranillo-based wines.</li>
        </ul>
      </section>

      <section className="modern-wine">
        <h2>Wine Today</h2>
        <p>
          Today, wine is enjoyed around the world, and the wine industry continues to evolve. New trends, such as organic and biodynamic wines, have emerged, and innovations in winemaking continue to push the boundaries of flavor and style.
        </p>
      </section>
    </div>
  );
};

export default WineHistory;
