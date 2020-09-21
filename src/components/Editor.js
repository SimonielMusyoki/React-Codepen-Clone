import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompressAlt,
  faExchangeAlt,
} from '@fortawesome/free-solid-svg-icons';

export default function Editor(props) {
  const { displayName, language, value, onChange } = props;

  function handleChange(editor, data, value) {
    onChange(value);
  }

  const [open, setOpen] = useState(true);

  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className='editor-title'>
        <h2>{displayName}</h2>
        <button
          onClick={() => setOpen((prevOpen) => !prevOpen)}
          type='button'
          class='expand-compress-btn'
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExchangeAlt} />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className='code-mirror-wrapper'
        options={{
          lineNumbers: true,
          lineWrapping: true,
          theme: 'material',
          lint: true,
          mode: language,
        }}
      />
    </div>
  );
}
