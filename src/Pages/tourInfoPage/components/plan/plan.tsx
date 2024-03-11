import React from 'react';
import './styles.scss';

interface IPlan{
    plan: {text: string}[]
}

export function Plan(props: IPlan) {
  const { plan } = props;
  return (
    <div className="planCard">
      <h2 className="planCard_title">Программа экскурсии</h2>
      <div className="planCard_body">
        <ul className="push">
          {plan.map((item: {text: string}, index: number) => <li key={index}>{plan[index].text}</li>)}
        </ul>
      </div>
    </div>
  );
}
