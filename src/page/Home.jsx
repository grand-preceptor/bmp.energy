import React from 'react';

import { Links } from '../component/Links';

import './home.scss';
import '../stylesheet/_common.scss';

export const Home = () => (
  <div className="d-flex">
    <div className="w-50">
      <h1>Benjamin Power</h1>
      <p>
        Been a member of numerous teams so able to communicate with juniors, seniors, business
        analysts,
        managers, and executives. Forte is building enterprise web applications. Written many RESTful
        APIs and responsive Angular/React UIs. Love writing, reviewing, and discussing code. I attempt
        to study everything in life; there is much that fascinates me. Reader, questioner, ruminator.
      </p>
      <Links/>
    </div>
  </div>
);
