import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { Manifesto } from "@/components/Manifesto/Manifesto";
import { TheBook } from "@/components/TheBook/TheBook";
import { InsideTheBook } from "@/components/InsideTheBook/InsideTheBook";
import { DayInRecipes } from "@/components/DayInRecipes/DayInRecipes";
import { Categories } from "@/components/Categories/Categories";
import { AirFryerSection } from "@/components/AirFryerSection/AirFryerSection";
import { WeeklyMenu } from "@/components/WeeklyMenu/WeeklyMenu";
import { ShoppingList } from "@/components/ShoppingList/ShoppingList";
import { BrandStatement } from "@/components/BrandStatement/BrandStatement";
import { Collection } from "@/components/Collection/Collection";
import { Pricing } from "@/components/Pricing/Pricing";
import { HowItWorks } from "@/components/HowItWorks/HowItWorks";
import { FAQ } from "@/components/FAQ/FAQ";
import { FinalCTA } from "@/components/FinalCTA/FinalCTA";
import { Footer } from "@/components/Footer/Footer";
import { SectionDivider } from "@/components/SectionDivider/SectionDivider";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <TheBook />
        <SectionDivider from="var(--color-cream)" to="var(--color-charcoal)" />
        <InsideTheBook />
        <SectionDivider from="var(--color-charcoal)" to="var(--color-cream)" />
        <DayInRecipes />
        <Categories />
        <SectionDivider from="var(--color-cream)" to="var(--color-charcoal-soft)" />
        <AirFryerSection />
        <SectionDivider from="var(--color-charcoal-soft)" to="var(--color-parchment)" />
        <WeeklyMenu />
        <ShoppingList />
        <BrandStatement />
        <Collection />
        <Pricing />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
