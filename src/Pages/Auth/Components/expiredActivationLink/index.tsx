import React from 'react';
import './styles.scss';

export function ExpiredLink() {
  return (
    <div className="wrapper-letter-sent">
      <div className="letter-sent">
        Your Link was expired. Please, use the latest link or redo request.
      </div>
    </div>
  );
}
