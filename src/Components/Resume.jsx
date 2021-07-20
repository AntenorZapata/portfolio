import React from 'react';
import file from '../imgs/resume.pdf';

export default function Resume() {
  return (
    <div>
      <div>
        <iframe
          style={{ width: '563px', height: '666px' }}
          src={file}
          type='application/pdf'
          title='title'
        />
      </div>
    </div>
  );
}
