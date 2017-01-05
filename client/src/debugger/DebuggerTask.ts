'use strict';


export interface DebuggerTask {    
    /**
     * 
     */
    run(callback: () => void): void;
    
    /**
     * 
     */
    dispose() : void;
}