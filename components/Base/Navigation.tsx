'use client';

import { useState } from 'react';
import { Tooltip, UnstyledButton, Stack, rem } from '@mantine/core';
import {
  IconPhoto,
  IconBuildingBridge2,
  IconBuildingFortress,
  IconBulb,
  IconMail
} from '@tabler/icons-react';

import classes from './_Base.module.scss';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';


interface NavbarLinkProps {
  icon: typeof IconPhoto;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon style={{ width: rem(40), height: rem(40) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const data = [
  { icon: IconPhoto, label: 'Images' },
  { icon: IconBuildingBridge2, label: 'Overview' },
  { icon: IconBuildingFortress, label: 'Projects' },
  { icon: IconBulb, label: 'Thoughts' },
  { icon: IconMail, label: 'Contact' },
];

export function Navigation() {
  const [active, setActive] = useState(0);

  const links = data.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <ColorSchemeToggle />
      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>
    </nav>
  );
}