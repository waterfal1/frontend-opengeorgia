import React from 'react';
import { text } from '../../constants';

export function AboutUsText() {
  return (
    <>{
        text.map((item) => (
          <div key={item.id}>
            <h2 className="content_unit_title">{item.unitTitle}</h2>
            <p className="content_unit_text">{item.unitText}</p>
          </div>
        ))
      }
    </>
  );
}
