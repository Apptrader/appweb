import React, { useState, useEffect } from 'react';
import Tree from 'react-d3-tree';
import axios from 'axios';
import { useSelector } from 'react-redux';

const ReferralTree = () => {

  const [treeData, setTreeData] = useState()
  const user = useSelector((state)=> state?.user);

  useEffect(() => {
    const fetchTreeData = async () => {
      try {
        const tree = await axios.get('http://localhost:4000/apiUser/referralTree', {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        });

        console.log(tree.data.referralTree)
        setTreeData(tree.data.referralTree);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchTreeData();
  }, [user.token])


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
      <div className="w-full h-500px bg-gray-800">
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