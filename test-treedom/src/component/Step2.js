import React from 'react';


class Step2 extends React.Component {
    render() {
        return (
            <div>
                <label>
                    Nome:
                <input type="text" name="nome" />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </div>
        );
    }
}
export default Step2;