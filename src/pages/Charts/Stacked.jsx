import React from 'react';

import { ChartsHeader, Stacked as StackedChart } from '../../components';

const Stacked = () => (
    <div className="p-10 m-4 mt-24 bg-white md:m-10 dark:bg-secondary-dark-bg rounded-3xl">
        <ChartsHeader category="Stacked" title="Revenue Breakdown" />
        <div className="w-full">
            <StackedChart />
        </div>
    </div>
);

export default Stacked;