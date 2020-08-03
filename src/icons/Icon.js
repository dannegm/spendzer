import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import configEvaFill from './Eva_Fill.json';
import configEvaOutline from './Eva_Outline.json';

const sets = {
  fill: createIconSetFromIcoMoon(configEvaFill, 'Eva_Fill', './Eva_Fill.ttf'),
  outline: createIconSetFromIcoMoon(configEvaOutline, 'Eva_Outline', './Eva_Outline.ttf'),
};

const mapSets = setName => set => ({ ...set, setName });

export const iconList = [
  ...configEvaFill.icons.map(mapSets('fill')),
  ...configEvaOutline.icons.map(mapSets('outline')),
];

const Icon = ({ name, ...props }) => {
  const iconDefinition = iconList.find(icon => {
    return icon.properties.name === name;
  });
  const IconSet = sets[iconDefinition.setName];

  return (
    <IconSet name={name} {...props} />
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default memo(Icon);
