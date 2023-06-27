import React from 'react';

class SafetyReportForm extends React.Component {
    render() {
        return (
            <form>
                <label>
                    Report:
                    <textarea />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default SafetyReportForm;

