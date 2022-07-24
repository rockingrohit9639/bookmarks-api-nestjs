import { Card } from 'antd';
import React from 'react';
import './Bookmark.css';
import { LinkOutlined } from '@ant-design/icons';

const Bookmark = () => {
  return (
    <Card
      title="Google"
      extra={
        <a href="http://google.com" target="_blank" rel="noreferrer">
          <LinkOutlined />
        </a>
      }
      style={{ width: 300 }}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ducimus
        doloremque accusamus culpa deserunt? Vero, nam! Ipsum fugit aperiam
        porro?
      </p>
    </Card>
  );
};

export default Bookmark;
