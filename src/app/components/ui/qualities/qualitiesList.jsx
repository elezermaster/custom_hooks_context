import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";

import {useQualities} from '../../../hooks/useQualities'

const QualitiesList = ({ qualities }) => {
    const {getQualitiesList, isLoading} = useQualities()
    const qualitiesList = getQualitiesList(qualities)
    if (!isLoading) {
        return (
        <>
            {qualitiesList.map((qual) => (
                <Quality
                    key={qual._id}
                    color={qual.color}
                    name={qual.name}
                     _id={qual._id}
                     />
            ))}
        </>
        )
    } else {
        return "loading ..."
    }
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
