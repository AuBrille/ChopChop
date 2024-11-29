import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { Icon } from '@/components/ui/icon/Icon';
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@/components/ui/sidebar/Sidebar';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'A basic Next.js application',
};

const AurelLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SidebarProvider>
        <Sidebar collapsible="icon">
          <SidebarHeader />
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {['home', 'test'].map((project) => (
                  <SidebarMenuItem key={project}>
                    <SidebarMenuButton asChild>
                      <a href={`aurel/${project}`}>
                        <Icon icon="building" />
                        <span>{project}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </Sidebar>
        <div className="w-full">{children}</div>
      </SidebarProvider>
    </>
  );
};

export default AurelLayout;
