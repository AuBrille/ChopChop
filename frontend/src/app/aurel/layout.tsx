'use client';

import type { Icons } from '@/components/ui/icon/icons';
import type { ReactNode } from 'react';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button/button';
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

const AurelLayout = ({ children }: { children: ReactNode }) => {
  const { push } = useRouter();

  const handleRedirectionClick = (url: string) => {
    push(url);
  };

  return (
    <>
      <SidebarProvider>
        <Sidebar collapsible="icon">
          <SidebarHeader />
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {[
                  { url: 'Home', icon: 'building' },
                  { url: 'Recipes', icon: 'book' },
                ].map((project) => (
                  <SidebarMenuItem key={project.url}>
                    <SidebarMenuButton asChild>
                      <div className="">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-full"
                          onClick={() => handleRedirectionClick(project.url)}
                        >
                          <Icon icon={project.icon as Icons} />
                          <span>{project.url}</span>
                        </Button>
                      </div>
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
