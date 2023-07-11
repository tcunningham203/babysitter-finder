import React from 'react';
import { Label, Radio } from 'flowbite-react';

const EdProDropdown = () => {
  return (

<fieldset
className="flex max-w-md flex-col gap-4"

id="radio">
<div className="flex items-center gap-4" >
    <Radio
        defaultChecked
        id="upper-man"
        name="NotSureWhatToPut"
        value="NotSureWhatToPut"
    />
    <Label htmlFor="upper-man" style={{ fontSize: 18 }}>
        Upper Manhattan
    </Label>
</div>
<div className="flex items-center gap-4">
    <Radio
        defaultChecked
        id="harlem"
        name="NotSureWhatToPut"
        value="NotSureWhatToPut"
    />
    <Label htmlFor="harlem" style={{ fontSize: 18 }}>
        Harlem
    </Label>
</div>
<div className="flex items-center gap-4">
    <Radio
        defaultChecked
        id="upper-east"
        name="NotSureWhatToPut"
        value="NotSureWhatToPut"
    />
    <Label htmlFor="upper-east" style={{ fontSize: 18 }}>
        Upper East Side
    </Label>
</div>
<div className="flex items-center gap-4">
    <Radio
        defaultChecked
        id="upper-west"
        name="NotSureWhatToPut"
        value="NotSureWhatToPut"
    />
    <Label htmlFor="upper-west" style={{ fontSize: 18 }}>
        Upper West Side
    </Label>
</div>
<div className="flex items-center gap-4">
    <Radio
        defaultChecked
        id="midtown"
        name="NotSureWhatToPut"
        value="NotSureWhatToPut"
    />
    <Label htmlFor="midtown" style={{ fontSize: 18 }}>
        Midtown
    </Label>
</div>
<div className="flex items-center gap-4">
    <Radio
        defaultChecked
        id="lower-man"
        name="NotSureWhatToPut"
        value="NotSureWhatToPut"
    />
    <Label htmlFor="lower-man" style={{ fontSize: 18 }}>
        Lower Manhattan
    </Label>
</div>
</fieldset>
 );
};

export default EdProDropdown;