import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
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
        <Sidebar variant="sidebar" collapsible="offcanvas">
          <SidebarContent>
            <SidebarMenu>
              {['home', 'test'].map((project) => (
                <SidebarMenuItem key={project}>
                  <SidebarMenuButton asChild>
                    <a href={`aurel/${project}`}>
                      <span>{project}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
};

export default AurelLayout;
