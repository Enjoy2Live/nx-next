import React, { useEffect, useState, useRef } from 'react';
import { Wrapper, Toggle, Rooms } from './StyledDropdownButton';

export interface DropdownButtonProps {
  toggleBtnText: string;
  dropdownItems: JSX.Element[] | JSX.Element | string;
  className?: string;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ toggleBtnText, dropdownItems, className }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (node?.current?.contains(e.target as Node)) return;
    // outside click
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <Wrapper ref={node} className={className}>
      <Toggle
        onClick={() => setMenuOpen(!menuOpen)}
        as="button"
        fontSize={1.2}
      >
        {toggleBtnText}
      </Toggle>
      <Rooms isOpen={menuOpen}>
        {dropdownItems}
      </Rooms>
    </Wrapper>
  );
};

export default DropdownButton;
