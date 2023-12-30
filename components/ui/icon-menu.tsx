interface IconMenuProps {
  isOpen: boolean;
}

const IconMenu: React.FC<IconMenuProps> = ({ isOpen }) => {
  const iconClasses = `z-50 icon nav-icon-5 ${isOpen ? "open" : ""}`;

  return (
    <div className={iconClasses}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default IconMenu;
