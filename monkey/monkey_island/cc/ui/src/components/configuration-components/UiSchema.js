import ArrayFieldTemplate from "../ui-components/AdvancedMultipleSelect";
import PbaInput from "./PbaInput";
import {API_PBA_LINUX, API_PBA_WINDOWS} from '../pages/ConfigurePage';

export default function UiSchema(props) {
  const UiSchema = {
    basic: {
      'ui:order': ['general', 'credentials'],
      credentials: {
        exploit_password_list: {
          "ui:ArrayFieldTemplate": ArrayFieldTemplate
        }
      }
    },
    basic_network: {},
    monkey: {
      behaviour: {
        custom_PBA_linux_cmd: {
          'ui:widget': 'textarea',
          'ui:emptyValue': ''
        },
        PBA_linux_file: {
          'ui:widget': PbaInput,
          'ui:options': {
            PbaFile: props.configuration.PBAlinuxFile,
            filename: props.configuration.configuration.monkey.behaviour.PBA_linux_filename,
            apiEndpoint: API_PBA_LINUX,
            setPbaFile: props.setPbaFileLinux
          }
        },
        custom_PBA_windows_cmd: {
          'ui:widget': 'textarea',
          'ui:emptyValue': ''
        },
        PBA_windows_file: {
          'ui:widget': PbaInput,
          'ui:options': {
            PbaFile: props.configuration.PBAwindowsFile,
            filename: props.configuration.configuration.monkey.behaviour.PBA_windows_filename,
            apiEndpoint: API_PBA_WINDOWS,
            setPbaFile: props.setPbaFileWindows
          }
        },
        PBA_linux_filename: {
          classNames: 'linux-pba-file-info',
          'ui:emptyValue': ''
        },
        PBA_windows_filename: {
          classNames: 'windows-pba-file-info',
          'ui:emptyValue': ''
        }
      }
    },
    cnc: {},
    network: {},
    exploits: {
      general: {
        exploiter_classes: {
          "ui:ArrayFieldTemplate": ArrayFieldTemplate
        }
      }
    },
    internal: {
      general: {
        started_on_island: {'ui:widget': 'hidden'}
      }
    }
  }
  return UiSchema[props.configuration.selectedSection]
}