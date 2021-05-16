import { Component, OnInit } from '@angular/core';
import {Agent, AgentService} from '../../services/agentService';


@Component({
  selector: 'app-agent-table',
  templateUrl: './agent-table.component.html',
  styleUrls: ['./agent-table.component.css']
})
export class AgentTableComponent implements OnInit {
  agents: Agent[] = [];

  constructor(private agentService: AgentService) {
  }

  ngOnInit(): void {
    this.updateAgents();
  }

  updateAgents(): void {
    this.agentService.getAll().subscribe(response => {
      this.agents = response;
    });

  }
  onDeleteAgent(id: number): void {
    const shouldDelete = confirm('Are you sure you want to delete it?');
    if (shouldDelete) {
      this.agentService.delete(id).subscribe(response => {
        this.updateAgents();
      });
    }
  }
}
