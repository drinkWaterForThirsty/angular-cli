import { Component } from '@angular/core';<% if (isMobile) { %>
import { APP_SHELL_DIRECTIVES } from '@angular/app-shell';<% } %>

@Component({
  selector: '<%= prefix %>-root',<% if (isMobile || inlineTemplate) { %>
  template: `
  <h1>
    {{title}}
  </h1>
  `,<% } else { %>
  templateUrl: './app.component.html',<% } %><% if (isMobile || inlineStyle) { %>
  styles: []<% } else { %>
  styleUrls: ['./app.component.<%= styleExt %>']<% } %>
})
export class AppComponent {
  title = '<%= prefix %> works!';
}
