import { NgModule } from "@angular/core";
import { AboutComponent } from "./about/about.component";
import { BannerProfileComponent } from "./banner-profile/banner-profile.component";
import { HeaderComponent } from "./header/header.component";
import { SkillsComponent } from "./skills/skills.component";

@NgModule({
    imports:[],
    declarations:[HeaderComponent, BannerProfileComponent, AboutComponent, SkillsComponent],
    providers:[],
    exports:[HeaderComponent, BannerProfileComponent, AboutComponent, SkillsComponent]
})
export class ComponentsModule{

}