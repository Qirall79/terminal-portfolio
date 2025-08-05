"use client";

export const Help = () => {
  return (
    <div>
      {/* <h2>commands:</h2> */}
      <div className="flex space-x-2 translate-x-4">
        <span>
          <span className="font-bold text-violet-200">help</span> =====&gt;
        </span>
        <span>this</span>
      </div>
     
      <div className="flex space-x-2 translate-x-4">
        <span>
          <span className="font-bold text-violet-200">ls</span> =====&gt;
        </span>
        <span>list information in current directory</span>
      </div>

      <div className="flex space-x-2 translate-x-4">
        <span>
          <span className="font-bold text-violet-200">cd</span> =====&gt;
        </span>
        <span>change directory</span>
      </div>

      <div className="flex space-x-2 translate-x-4">
        <span>
          <span className="font-bold text-violet-200">cat</span> =====&gt;
        </span>
        <span>display file contents</span>
      </div>
      
      <div className="flex space-x-2 translate-x-4">
        <span>
          <span className="font-bold text-violet-200">clear</span> =====&gt;
        </span>
        <span>clear terminal</span>
      </div>
    </div>
  );
};
