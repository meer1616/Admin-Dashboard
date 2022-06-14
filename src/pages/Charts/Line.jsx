
import React from 'react';

import { ChartsHeader, LineChart } from '../../components';

const Line = () => (
    <div className="p-10 m-4 mt-24 bg-white md:m-10 dark:bg-secondary-dark-bg rounded-3xl">
        <ChartsHeader category="Line" title="Inflation Rate" />
        <div className="w-full">
            <LineChart />
        </div>
    </div>
);

export default Line