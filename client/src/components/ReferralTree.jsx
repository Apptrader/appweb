import React from 'react';
import Tree from 'react-d3-tree';

const ReferralTree = ({ treeData }) => {
  const addNameToNode = (node) => {
    if (node.referent) {
      node.name = node.referent.UserName;
    }
    if (node.children) {
      node.children.forEach((child) => addNameToNode(child));
    }
  };

  if (treeData && treeData.length > 0) {
    const modifiedTreeData = JSON.parse(JSON.stringify(treeData));
    addNameToNode(modifiedTreeData[0]);

    return (
      <div className="w-full h-500px">
        <Tree
          data={modifiedTreeData[0]}
          orientation="horizontal"
          translate={{ x: 300, y: 50 }}
          nodeSvgShape={{
            shape: 'circle',
            shapeProps: {
              className: 'fill-bg-green-500 stroke-border-green-600 stroke-width-2',
            },
          }}
          nodeLabelComponent={{
            render: <text className="text-white text-sm" />,
          }}
          styles={{
            links: 'stroke-red-500 stroke-width-2',
          }}
        />
      </div>
    );
  }

  return null;
};

export default ReferralTree;