import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const seoData = {
  toronto: {
    title: "Bhanga Cannabis Toronto | Legal Cannabis Online",
    description: "Buy legal cannabis in Toronto. Safe, legal, and trusted cannabis products for adults 19+.",
  },
  vancouver: {
    title: "Bhanga Cannabis Vancouver | Shop Online",
    description: "Order premium cannabis products in Vancouver. 19+ only, fast delivery available.",
  },
  calgary: {
    title: "Calgary Cannabis Dispensary | Bhanga",
    description: "Calgary's top cannabis shop. Browse legal cannabis products for safe consumption.",
  },
};

const LocationPage = () => {
  const { location } = useParams();
  const data = seoData[location.toLowerCase()] || {
    title: "Bhanga Cannabis | Legal Cannabis Online",
    description: "Buy safe, legal cannabis products across Canada. Age 19+ required.",
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <link rel="canonical" href={`https://yourdomain.com/${location}`} />
      </Helmet>

      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-lg text-gray-700">{data.description}</p>
    </div>
  );
};

export default LocationPage;
