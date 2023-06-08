import React from "react";
import '../styles/components/loader.css'

interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return (
    <div>
      {loading ? (
        <div className="spinner-loader">
        </div>
      ) : null}
    </div>
  );
};

export default Loader;
