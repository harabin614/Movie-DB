import React from "react";

const NavItems = () => {
  const list = (
    <div>
      <List>
        {["Home", "Popular"].map((text, index) => (
          <ListItem button key={text} onClick={() => toggleDrawer(false)}>
            {text === "Home" ? (
              <NavLink to={`/`} exact>
                {text}
              </NavLink>
            ) : (
              <NavLink to={`/${text}`}>{text}</NavLink>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );

  return { list };
};

export default NavItems;
