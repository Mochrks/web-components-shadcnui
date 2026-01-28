'use client'

import { Header } from '@/components/showcase/Header'
import { TypographyDemo } from '@/components/showcase/TypographyDemo'
import { BreadcrumbsDemo } from '@/components/showcase/BreadcrumbsDemo'
import { AlertsDemo } from '@/components/showcase/AlertsDemo'
import { AccordionDemo } from '@/components/showcase/AccordionDemo'
import { BadgesDemo } from '@/components/showcase/BadgesDemo'
import { ButtonsDemo } from '@/components/showcase/ButtonsDemo'
import { InputsDemo } from '@/components/showcase/InputsDemo'
import { AvatarsDemo } from '@/components/showcase/AvatarsDemo'
import { RadioSliderDemo } from '@/components/showcase/RadioSliderDemo'
import { DatePickerDemo } from '@/components/showcase/DatePickerDemo'
import { AutocompleteDemo } from '@/components/showcase/AutocompleteDemo'
import { FieldValuesDemo } from '@/components/showcase/FieldValuesDemo'
import { StepperDemo } from '@/components/showcase/StepperDemo'
import { TabsDialogDemo } from '@/components/showcase/TabsDialogDemo'
import { DataTableDemo } from '@/components/showcase/DataTableDemo'
import { LoadingDemo, NoDataDemo } from '@/components/showcase/LoadingDemo'
import { SkeletonDemo } from '@/components/showcase/SkeletonDemo'
import { FormDemo } from '@/components/showcase/FormDemo'
import { DropdownsDemo } from '@/components/showcase/DropdownsDemo'
import { ThemeProvider } from '@/theme/theme-provider'

export default function ShowcasePage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="container mx-auto p-10 space-y-12">
        <Header />

        <TypographyDemo />
        <BreadcrumbsDemo />
        <AlertsDemo />
        <AccordionDemo />
        <BadgesDemo />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ButtonsDemo />
          <InputsDemo />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AvatarsDemo />
          <RadioSliderDemo />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DatePickerDemo />
          <AutocompleteDemo />
        </div>

        <FieldValuesDemo />
        <StepperDemo />
        <TabsDialogDemo />
        <DataTableDemo />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <LoadingDemo />
          <NoDataDemo />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkeletonDemo />
          <FormDemo />
        </div>

        <DropdownsDemo />
      </div>
    </ThemeProvider>
  )
}
