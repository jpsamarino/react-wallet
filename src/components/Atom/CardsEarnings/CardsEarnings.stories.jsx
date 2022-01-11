import React from 'react';

import CardsEarnings from './CardsEarnings';
import assets from "../../../TestData/tableAssets-DataTest.json"

export default {
  title: 'ATOM/CardsEarnings',
  component: CardsEarnings,
};

const Template = (args) => <CardsEarnings {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  earnings:assets.totalEarnings
}