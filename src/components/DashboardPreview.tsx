
import React from 'react';

const DashboardPreview = () => {
  return (
    <section id="dashboard" className="w-full py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Intuitive task management interface
          </h2>
          <p className="text-cosmic-muted text-lg">
            A powerful dashboard that adapts to how your team works
          </p>
        </div>
        
        <div className="cosmic-glow relative rounded-xl overflow-hidden border border-cosmic-light/20 shadow-2xl">
          {/* Mock Dashboard */}
          <div className="bg-cosmic-darker w-full">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between p-4 border-b border-cosmic-light/10">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-md bg-cosmic-light/20 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-sm bg-cosmic-accent"></div>
                </div>
                <span className="text-white font-medium">Marketing Campaign Q2</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-cosmic-light/30 border-2 border-cosmic-darker"></div>
                  <div className="h-8 w-8 rounded-full bg-cosmic-light/20 border-2 border-cosmic-darker"></div>
                  <div className="h-8 w-8 rounded-full bg-cosmic-light/40 border-2 border-cosmic-darker"></div>
                  <div className="h-8 w-8 rounded-full bg-cosmic-accent/20 border-2 border-cosmic-darker flex items-center justify-center text-xs text-cosmic-accent">+3</div>
                </div>
                
                <div className="h-8 px-3 rounded-md bg-cosmic-light/10 flex items-center justify-center text-white text-sm">
                  Share
                </div>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="flex h-[500px] overflow-hidden">
              {/* Sidebar */}
              <div className="w-64 border-r border-cosmic-light/10 p-4 space-y-4">
                <div className="space-y-2">
                  <div className="text-xs text-cosmic-muted uppercase">Navigation</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-cosmic-light/10 text-white">
                      <div className="h-3 w-3 rounded-sm bg-cosmic-accent"></div>
                      <span>Board</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-cosmic-muted hover:bg-cosmic-light/5">
                      <div className="h-3 w-3 rounded-sm bg-cosmic-muted/30"></div>
                      <span>Timeline</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-cosmic-muted hover:bg-cosmic-light/5">
                      <div className="h-3 w-3 rounded-sm bg-cosmic-muted/30"></div>
                      <span>Calendar</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-cosmic-muted hover:bg-cosmic-light/5">
                      <div className="h-3 w-3 rounded-sm bg-cosmic-muted/30"></div>
                      <span>Files</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 pt-4">
                  <div className="text-xs text-cosmic-muted uppercase">Teams</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-cosmic-muted hover:bg-cosmic-light/5">
                      <div className="h-3 w-3 rounded-full bg-cosmic-accent/80"></div>
                      <span>Marketing</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-cosmic-muted hover:bg-cosmic-light/5">
                      <div className="h-3 w-3 rounded-full bg-purple-400/80"></div>
                      <span>Design</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-cosmic-muted hover:bg-cosmic-light/5">
                      <div className="h-3 w-3 rounded-full bg-blue-400/80"></div>
                      <span>Development</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 p-4">
                {/* Board Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">Tasks</h3>
                    <span className="text-xs bg-cosmic-light/20 px-2 py-1 rounded-full text-cosmic-muted">23</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-md bg-cosmic-light/10 flex items-center justify-center text-cosmic-muted">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M12 9L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div className="h-8 w-8 rounded-md bg-cosmic-light/10 flex items-center justify-center text-cosmic-muted">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 9L17 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 17L7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="h-8 px-3 rounded-md bg-cosmic-accent text-cosmic-darker flex items-center justify-center text-sm font-medium">
                      New Task
                    </div>
                  </div>
                </div>
                
                {/* Kanban Board */}
                <div className="flex gap-4 h-[400px] overflow-x-auto pb-4">
                  {/* To Do Column */}
                  <div className="flex flex-col w-72 min-w-72 rounded-lg bg-cosmic-light/5 border border-cosmic-light/10">
                    <div className="p-3 border-b border-cosmic-light/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-cosmic-muted/50"></span>
                        <h4 className="font-medium text-sm">To Do</h4>
                        <span className="text-xs bg-cosmic-light/20 px-2 py-0.5 rounded-full text-cosmic-muted">8</span>
                      </div>
                      <div className="text-cosmic-muted">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 12V12.01M8 12V12.01M16 12V12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    
                    <div className="p-2 flex-1 space-y-2 overflow-auto">
                      <div className="p-3 bg-cosmic-darker rounded-md border border-cosmic-light/10 shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-400/20 text-purple-300">Design</span>
                          <span className="text-cosmic-muted text-xs">May 20</span>
                        </div>
                        <h5 className="font-medium mb-1">Update landing page hero section</h5>
                        <p className="text-xs text-cosmic-muted mb-3">Review new design mockups and update copy</p>
                        <div className="flex justify-between items-center">
                          <div className="flex -space-x-1">
                            <div className="h-6 w-6 rounded-full bg-cosmic-light/30 border-2 border-cosmic-darker"></div>
                            <div className="h-6 w-6 rounded-full bg-cosmic-light/20 border-2 border-cosmic-darker"></div>
                          </div>
                          <span className="flex items-center gap-1 text-cosmic-muted text-xs">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 12H16M8 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            3/5
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-cosmic-darker rounded-md border border-cosmic-light/10 shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-cosmic-accent/20 text-cosmic-accent">Marketing</span>
                          <span className="text-cosmic-muted text-xs">May 22</span>
                        </div>
                        <h5 className="font-medium mb-1">Social media campaign planning</h5>
                        <p className="text-xs text-cosmic-muted mb-3">Outline Q2 campaign goals and content calendar</p>
                        <div className="flex justify-between items-center">
                          <div className="flex -space-x-1">
                            <div className="h-6 w-6 rounded-full bg-cosmic-accent/20 border-2 border-cosmic-darker"></div>
                          </div>
                          <span className="flex items-center gap-1 text-cosmic-muted text-xs">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 12H16M8 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            0/4
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* In Progress Column */}
                  <div className="flex flex-col w-72 min-w-72 rounded-lg bg-cosmic-light/5 border border-cosmic-light/10">
                    <div className="p-3 border-b border-cosmic-light/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-blue-400"></span>
                        <h4 className="font-medium text-sm">In Progress</h4>
                        <span className="text-xs bg-cosmic-light/20 px-2 py-0.5 rounded-full text-cosmic-muted">5</span>
                      </div>
                      <div className="text-cosmic-muted">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 12V12.01M8 12V12.01M16 12V12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    
                    <div className="p-2 flex-1 space-y-2 overflow-auto">
                      <div className="p-3 bg-cosmic-darker rounded-md border border-cosmic-light/10 shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-400/20 text-blue-300">Development</span>
                          <span className="text-cosmic-muted text-xs">May 18</span>
                        </div>
                        <h5 className="font-medium mb-1">API integration with payment gateway</h5>
                        <p className="text-xs text-cosmic-muted mb-3">Connect payment processor and test transactions</p>
                        <div className="flex justify-between items-center">
                          <div className="flex -space-x-1">
                            <div className="h-6 w-6 rounded-full bg-cosmic-light/40 border-2 border-cosmic-darker"></div>
                          </div>
                          <span className="flex items-center gap-1 text-cosmic-muted text-xs">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 12H16M8 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            2/3
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Review Column */}
                  <div className="flex flex-col w-72 min-w-72 rounded-lg bg-cosmic-light/5 border border-cosmic-light/10">
                    <div className="p-3 border-b border-cosmic-light/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-amber-400"></span>
                        <h4 className="font-medium text-sm">In Review</h4>
                        <span className="text-xs bg-cosmic-light/20 px-2 py-0.5 rounded-full text-cosmic-muted">3</span>
                      </div>
                      <div className="text-cosmic-muted">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 12V12.01M8 12V12.01M16 12V12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    
                    <div className="p-2 flex-1 space-y-2 overflow-auto">
                      <div className="p-3 bg-cosmic-darker rounded-md border border-cosmic-light/10 shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-cosmic-accent/20 text-cosmic-accent">Marketing</span>
                          <span className="text-cosmic-muted text-xs">May 15</span>
                        </div>
                        <h5 className="font-medium mb-1">Email newsletter content</h5>
                        <p className="text-xs text-cosmic-muted mb-3">Review draft and provide feedback for improvements</p>
                        <div className="flex justify-between items-center">
                          <div className="flex -space-x-1">
                            <div className="h-6 w-6 rounded-full bg-cosmic-light/30 border-2 border-cosmic-darker"></div>
                            <div className="h-6 w-6 rounded-full bg-cosmic-light/20 border-2 border-cosmic-darker"></div>
                            <div className="h-6 w-6 rounded-full bg-cosmic-light/40 border-2 border-cosmic-darker"></div>
                          </div>
                          <span className="flex items-center gap-1 text-cosmic-muted text-xs">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 12H16M8 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            4/5
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Completed Column */}
                  <div className="flex flex-col w-72 min-w-72 rounded-lg bg-cosmic-light/5 border border-cosmic-light/10">
                    <div className="p-3 border-b border-cosmic-light/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-cosmic-accent"></span>
                        <h4 className="font-medium text-sm">Completed</h4>
                        <span className="text-xs bg-cosmic-light/20 px-2 py-0.5 rounded-full text-cosmic-muted">7</span>
                      </div>
                      <div className="text-cosmic-muted">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 12V12.01M8 12V12.01M16 12V12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    
                    <div className="p-2 flex-1 space-y-2 overflow-auto">
                      <div className="p-3 bg-cosmic-darker rounded-md border border-cosmic-light/10 shadow-sm opacity-70">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-400/20 text-purple-300">Design</span>
                          <span className="text-cosmic-muted text-xs">May 10</span>
                        </div>
                        <h5 className="font-medium mb-1">Create user flow diagrams</h5>
                        <p className="text-xs text-cosmic-muted mb-3">Document onboarding process for new users</p>
                        <div className="flex justify-between items-center">
                          <div className="flex -space-x-1">
                            <div className="h-6 w-6 rounded-full bg-cosmic-light/30 border-2 border-cosmic-darker"></div>
                          </div>
                          <span className="flex items-center gap-1 text-cosmic-accent text-xs">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            5/5
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
